// alt:V built-in module that provides natives API (functions from GTA V).
import * as alt from 'alt-server';

import * as chat from 'alt:chat';

chat.registerCmd('notify', (player, args) => {
  alt.emitClient(player, 'server:notify', 'you just won the lottery', 2000, 'success');
}, false);
