// import React from 'react';

export default function useEventListener(name: string, element: Element, callback: (event: Event) => void) {
    const event = new Event(name);

    const publish = () => {
        document.dispatchEvent(event);
    };

    const subscribe = () => {
        element.addEventListener(name, callback);
    };

    return { publish, subscribe };
}
