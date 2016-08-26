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
    editor  = atom.workspace.getActiveTextEditor();
    alert('line count: ' + editor.getLineCount());

    
    # JavaのPathチェック
    javapath = "packages/kato-test/vendor/" + process.platform + "/jre/bin";
    userconfpath = atom.config.getUserConfigPath();
    pathlen = useconfpath.length;
    userconfpath = userconfpath.substring(0, pathlen - 11);

    javapath =  userconfpath + javapath;
    console.log "Platform Java path[" + javapath + "]"
  },

  toggle() {
    console.log('KatoTestPkg was toggled!');
  }

};
