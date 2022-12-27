import { startOfDay, endOfDay, format } from 'date-fns';

// 没有处理参数时间段重叠的情况，例如后端参数是[8点，10点],[9点, 11点]
// 没有处理参数异常的情况，例如后端参数是[10点，8点]
export function getIdleTimeFrame(busyFrames: Array<string[]>) {
  if (busyFrames.length === 0 || busyFrames[0].length === 0) {
    throw new Error('params illegal');
  }
  // 传入参数改为时间戳
  const busyFramesTimestamp = busyFrames.map((v) => v.map((t) => new Date(t).getTime())).sort((prev, next) => prev[0] - next[0]);

  // 获取当天的起始时间戳
  const [start] = busyFramesTimestamp[0];
  const todayStart = startOfDay(new Date(start)).getTime();
  const todayEnd = endOfDay(new Date(start)).getTime();

  return busyFramesTimestamp.reduce<Array<string[]>>((total, [start, end], index) => {
    const currentStart = index === 0 ? todayStart : end;
    const currentEnd = index === busyFramesTimestamp.length - 1 ? todayEnd : start;
    total.push([format(currentStart, 'yyyy-MM-dd HH:mm:ss'), format(currentEnd, 'yyyy-MM-dd HH:mm:ss')]);
    return total;
  }, [] as Array<string[]>);
}

// TEST CASE
const frame1 = ['2022-03-17 10:00:00', '2022-03-17 12:00:00'];
const frame2 = ['2022-03-17 15:00:00', '2022-03-17 17:00:00'];
const frame3 = ['2022-03-17 19:00:00', '2022-03-17 20:30:00'];
const frames = [frame2, frame1, frame3];

console.log(getIdleTimeFrame(frames));
// ['2022-03-17 00:00:00', '2022-03-17 10:00:00']
// ['2022-03-17 17:00:00', '2022-03-17 15:00:00']
// ['2022-03-17 20:30:00', '2022-03-17 23:59:59']
// export const mailModelHandler=new MailModelHandler();
