/**
 * `LowerCaseDashedName` Description
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class PokedexMod extends Polymer.Element {
  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return "pokedex-mod";
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      prop1: {
        type: String,
        value: "listado-pokemon"
      },
      pageLimit: {
        type: Number,
        value: 20
      },
      currentPage: {
        type: Number,
        value: 0,
        observer: "pageObserver",
        notify: true
      },
      _isFirstPage: {
        type: Boolean,
        computed: "isFirstPage(currentPage)"
      }
    };
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    Polymer.RenderStatus.afterNextRender(this, function() {});
  }
  displayIndex(url) {
    return url.substring(34, url.length - 1);
  }

  isFirstPage(_currentPage) {
    return _currentPage == 0;
  }
  nextPage() {
    this.set("currentPage", this.currentPage + this.pageLimit);
  }
  prevPage() {
    this.currentPage -= this.pageLimit;
  }
  pageObserver(_currPageNew, _currPageOld) {
    console.log("Observed: ", _currPageNew, _currPageOld);
    this.$.pokedexGetAjax.generateRequest();
  }
  ready() {
    super.ready();
    this.$.pokedexGetAjax.generateRequest();
  }
  clickeado(_name) {
    alert("pum" +  this.currentPage + _name);
}
}

window.customElements.define(PokedexMod.is, PokedexMod);

