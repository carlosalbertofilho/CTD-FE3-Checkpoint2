import { render, screen } from "../../test-utils"
import {Login} from '../../../Pages/Login';

test('should show login form', () => {
    render(<Login />)
    expect(screen.getByText('Login')).toBeInTheDocument();
});