class WaifuItem extends HTMLElement {
  set waifu(waifu) {
    this._waifu = waifu;
    this.render();
  }

  render() {
    this.innerHTML = `
            <img class="featured-image" src="${this._waifu.featuredImage}" alt="${this._waifu.title}">
            <div class="article-info">
              <h2><a href="${this._waifu.id}">${this._waifu.title}</a></h2>
              <p>${this._waifu.description}</p>
            </div>
          `;
  }
}

customElements.define("waifu-item", WaifuItem);
