import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 5000,
        transports: ['websocket'],
    };

    try {
        const socket = io('http://localhost:5000', options);
        return socket;
    } catch (error) {
        console.error('Socket connection error:', error);
        throw error;
    }
};
