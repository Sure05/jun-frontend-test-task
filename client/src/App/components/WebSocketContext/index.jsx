import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import io from 'socket.io-client';

export const WebsocketContext = createContext(null)

const WebsocketProvider = ({children}) => {
	const [connection, setConnection] = useState(null);
	const options = useMemo(() => ({}), []);
	
	useEffect(() => {
		try {
			const socketConnection = io('http://localhost:3002', options);
			setConnection(socketConnection);
		} catch (err) {
			console.log(err);
		}
	}, [options]);
	
	return <WebsocketContext.Provider value={connection}>{children}</WebsocketContext.Provider>
}

export const useWebsocket = () => {
	const ctx = useContext(WebsocketContext);
	if (ctx === undefined) {
		throw new Error('useWebsocket can only be used inside WebsocketContext');
	}
	return ctx;
};

export default WebsocketProvider
