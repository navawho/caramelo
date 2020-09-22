import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

import { Radio } from './styles';

const Checkbox: React.FC = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Radio isChecked={isChecked} onClick={() => setIsChecked(!isChecked)}>
			<FiCheck color="#fff" />
		</Radio>
	);
};

export default Checkbox;
