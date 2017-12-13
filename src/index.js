import React from 'react';
import { render } from 'react-dom';

import styles from './index.css';

export default function App() {
    return (
        <div className={styles.app} >
            <p className={styles.sup}>
                Sup.
            </p>
        </div>
    );
}

render(<App />, document.getElementById('app'));
