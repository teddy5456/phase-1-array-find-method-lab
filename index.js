function superbowlWin(record) {
    const winningRecord = record.find(entry => entry.result === "W");
    if (!winningRecord) {
      return undefined;
    }
    return winningRecord.year;
  }