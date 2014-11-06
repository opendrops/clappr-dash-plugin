var Playback = require('playback');
var JST = require('./jst');

class ClapprDashPlugin extends Playback {
  get name() { return 'clappr_dash_plugin'; }

  render() {
    console.log("rendering", this.name);
    var style = $('<style>').html(JST.CSS[this.name]);
    this.$el.append(style);
    return this;
  }

}

ClapprDashPlugin.canPlay = function(source) {
  //should return true for the supported media source
  return false;
};


module.exports = window.ClapprDashPlugin = ClapprDashPlugin;
