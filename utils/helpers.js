module.exports = {
  format_date: (timestamp) => {
    return `${new Date(timestamp).getDate()}/${new Date(timestamp).getMonth() + 1}/${new Date(timestamp).getFullYear()}`
  }
};