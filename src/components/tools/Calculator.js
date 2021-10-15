import React, { useState } from 'react';

const Calculator = () => {
	const [count, setCount] = useState(0);

    function decremementCount() {
        setCount(prevCount => prevCount - 1)
    }

	return <div></div>;
};

export default Calculator;
