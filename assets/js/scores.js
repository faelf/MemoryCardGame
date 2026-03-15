export const scores = {
  load() {
    const storedData = localStorage.getItem("game-scores");

    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [];
    }
  },
  add(scores) {
    const current = this.load();
    current.push(scores);
    if (current.length === 11) {
      current.shift();
    }
    localStorage.setItem("game-scores", JSON.stringify(current));
  },
  empty(element) {
    element.innerHTML = /* html */ `
    <h4>No scores yet</h4>
    `;
  },
  thead(head) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    Object.values(head).forEach((value) => {
      const th = document.createElement("th");
      th.innerText = value;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    return thead;
  },
  tbody(body) {
    const tbody = document.createElement("tbody");

    body.forEach((item) => {
      const tr = document.createElement("tr");
      Object.values(item).forEach((value) => {
        const td = document.createElement("td");
        td.innerText = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    return tbody;
  },
  /**
   * Displays the scores saved in localstorage.
   * @param {Object} config - The configuration object.
   * @param {HTMLElement} config.table - The table element to update.
   * @param {Object} config.thead - The table headers definition.
   * @param {Array} config.tbody - The data to populate the table body.
   */
  display(config) {
    config.table.innerHTML = "";

    if (config.tbody.length === 0) {
      this.empty(config.table);
      return;
    }
    config.table.appendChild(this.thead(config.thead));
    config.table.appendChild(this.tbody(config.tbody));
  },
};
