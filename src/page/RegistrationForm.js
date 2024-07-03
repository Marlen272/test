import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetRegistration } from './UserSlice';

const RegistrationForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const isRegistered = useSelector((state) => state.user.isRegistered)
    const dispatch = useDispatch()

    const handleRegister = () => {
        if (username && password && confirmPassword) {
            if (password === confirmPassword) {
                dispatch(registerUser({ username, password }))
            } else {
                alert('Пароли не совпадают')
            }
        } else {
            alert('Пожалуйста, заполните все поля')
        }
    }

    const resetForm = () => {
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        dispatch(resetRegistration())
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            {isRegistered ? (
                <p>Пользователь успешно зарегистрирован</p>
            ) : (
                <p>Пользователь уже существует</p>
            )}
        </div>
    )
}

export default RegistrationForm;
