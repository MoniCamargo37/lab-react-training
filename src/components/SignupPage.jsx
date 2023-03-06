import { Button, Form, Input, Select } from 'antd';
import { useState } from 'react';
const { Option } = Select;

function SignupPage() {
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('start');
  const [isTypingEmail, setIsTypingEmail] = useState(false);

  const updateStateCountry = (e) => {
    // const country = e
    setNationality(e);
  };
  const checkEmailValid = (email) => {
    // Aquí puedes agregar tu propia lógica de validación de correo electrónico
    return email.includes('@');
  };

  const updateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsTypingEmail(true);
    setIsEmailValid(checkEmailValid(email));
  };
  const updatePassword = (e) => {
    const password = e.target.value;

    if (0 < password.length && password.length <= 4) {
      setPasswordStrength('weak');
    } else if (4 < password.length && password.length <= 7) {
      setPasswordStrength('medium');
    } else if (7 < password.length && password.length <= 10) {
      setPasswordStrength('strong');
    } else if (10 < password.length) {
      setPasswordStrength('perfect');
    }
    setPassword(password);
  };

  return (
    <div className="formSignup">
      <Form>
        <Form.Item
          label="Email"
          name="email"
          onChange={(e) => updateEmail(e)}
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please insert a valid email!',
            },
          ]}
        >
          <Input
            style={{
              border: isEmailValid
                ? '1px solid green'
                : isTypingEmail
                ? '1px solid red'
                : '1px solid #d9d9d9',
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          onChange={(e) => updatePassword(e)}
          name="password"
          rules={[{ required: true, message: 'Please insert your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <div className="passwordStars">
          {passwordStrength === 'start' && <p>Password Strength: ✩✩✩✩✩</p>}
          {passwordStrength === 'weak' && <p>Password Strength: ★✩✩✩✩</p>}
          {passwordStrength === 'medium' && <p>Password Strength: ★★✩✩✩</p>}
          {passwordStrength === 'strong' && <p>Password Strength: ★★★✩✩</p>}
          {passwordStrength === 'perfect' && <p>Password Strength: ★★★★★</p>}
        </div>
        <Form.Item label="Nationality">
          <Form.Item
            name={['address', 'country']}
            noStyle
            rules={[
              {
                required: true,
                message: 'country is required',
              },
            ]}
          >
            <Select
              onChange={(e) => updateStateCountry(e)}
              placeholder="Select country"
            >
              <Option value="en">EN</Option>
              <Option value="de">DE</Option>
              <Option value="fr">FR</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        {nationality === 'fr' && <p>Bonjour </p>}
        {nationality === 'de' && <p>Hallo </p>}
        {nationality === 'en' && <p>Good morning</p>}
        <p>Your email is: {email}</p>
        <Button type="primary" htmlType="submit">
          Signup{' '}
        </Button>
      </Form>
    </div>
  );
}

export default SignupPage;
