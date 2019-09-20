class Entry {

  constructor(grade, date, quality) {
    this.props = {};
    this.props.grade = grade;
    this.props.date = date;
    this.props.quality = quality;
  }

  render() {
    return `
      <ul>
        <li>${this.props.grade}</li>
        <li>${this.props.date}</li>
        <li>${this.props.quality}</li>
      </ul>`;
  }

}

module.exports = Entry;
