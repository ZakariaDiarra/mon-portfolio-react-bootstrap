

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ReadMore = ({ text }) => {
    if (!text) {
        // Gérer le cas où text est undefined
        return null; // ou retourner un texte par défaut
    }

    const [isReadMoreShown, setReadMoreShown] = useState(false);
    const toggleReadMore = () => setReadMoreShown(!isReadMoreShown);

    const previewText = text.substring(0, 400) + '...';

    return (
        <div>
            {isReadMoreShown ? text : previewText}
            <Button variant="light" onClick={toggleReadMore}>
                {isReadMoreShown ? 'Lire moins' : 'Lire plus'}
            </Button>
        </div>
    );
};

export default ReadMore