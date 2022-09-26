import { Planet } from 'react-planet'
import {Figure} from './Figure';
import {Button} from 'bootstrap';
import './App.css';

export function MyPlanet() {
    return (
        <Planet
        centerContent={ <Figure/>}
        hideOrbit
        autoClose
        orbitRadius={60}
        bounceOnClose
        rotation={90}
        // the bounce direction is minimal visible
        // but on close it seems the button wobbling a bit to the bottom
        bounceDirection="BOTTOM"
    >
        <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgroundColor: '#9257ad',
                }}
            />
            <div
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: '50%',
                    backgrounsdColor: '#9257ad',
                }}
            />
        <div />
        <div />
        <div />
        <div />
    </Planet>
    );
}