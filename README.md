# altv_notify
Notify system

# How to use?

*Server-side:*

alt.emitClient(player, 'server:notify', msg, time, type);

alt.emitClient(player, 'server:notify', 'you just won the lottery', 2000, 'success');

*Client-side:*

alt.emit('client:notify', msg, time, type);

alt.emit('client:notify', 'you just won the lottery', 2000, 'success');

# alt:V.dk
https://discord.gg/HAmKvHKS

![My Image](showcase.png)
