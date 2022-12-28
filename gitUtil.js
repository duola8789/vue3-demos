const childProcess = require('child_process');

function getCommitInfo() {
  // 获取 commit id → cee0b42，
  const commitHash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();
  // 获取 commit log 输出结果
  // commit cee0b429601c7d6f2e4f6b385fb648786fbd16b8
  // CommitMessage=init,Author=duola8789,Date=2022-12-27 19:19:24
  const commitInfo = childProcess
    .execSync('git rev-list --format="CommitMessage=%s,Author=%an,Date=%cd" --date=format:\'%Y-%m-%d %H:%M:%S\' --max-count=1 HEAD')
    .toString()
    .trim();
  // 提取信息
  const regResult = /(CommitMessage=.+,Date=.+)/.exec(commitInfo);
  const commitDetail = Array.isArray(regResult) ? regResult[0] : '';
  // 拼接信息
  return `CommitId=${commitHash},${commitDetail}`;
}

console.log(getCommitInfo());
module.exports = {
  getCommitInfo,
};
