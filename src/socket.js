import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 5000,
        transports: ['websocket'],
    };

    try {
        const socket = io(process.env.BACKEND_URL, options);
        return socket;
    } catch (error) {
        console.error('Socket connection error:', error);
        throw error;
    }
};
