import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

import App from '../src/App';


describe('App Component', () => {
    it('has the correct class', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);

        expect(linkElement).toBeInTheDocument();
    });
});