'use babel';

import { CompositeDisposable } from 'atom';

export default {

  activate(state) {

    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-text-editor', {'kato-test:countline':() => this.countline()}));
  },

  deactivate() {
  },

  countline() {
    editor  = atom.workspace.getActiveTextEditor()
    alert('line count: ' + editor.getLineCount())
  },

  toggle() {
    console.log('KatoTestPkg was toggled!');
  }

};
