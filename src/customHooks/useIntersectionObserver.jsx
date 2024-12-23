import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options = { threshold: 0.1 }, style = { order: 'fade-visible' }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let classlistAdd = entry.target.classList.value.trim().split(" ").find(word => word.startsWith("fade"));
                 classlistAdd = classlistAdd + '-visible'

                classlistAdd = classlistAdd.replace(/\s+/g, '');
                if (entry.isIntersecting) {
                    entry.target.classList.remove(classlistAdd)

                    entry.target.classList.add(classlistAdd);
                    observer.unobserve(entry.target); // Optionally stop observing

                } else {
                    console.log("HIDDING")
                   
                }
            });
        }, options);

        elementsRef.current.forEach((element) => {

            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            elementsRef.current.forEach((element) => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [options]);

    const addElementRef = (element) => {

        if (element && !elementsRef.current.includes(element)) {
            elementsRef.current.push(element);
        }
    };

    return addElementRef;
};

export default useIntersectionObserver;
