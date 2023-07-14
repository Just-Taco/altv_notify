# altv_notify
Notify system

# How to use?

Server-side:
alt.emitClient(player, 'server:notify', 'you just won the lottery', 2000, 'success');

Client-side:
alt.emit(player, 'client:notify', 'you just won the lottery', 2000, 'success');
