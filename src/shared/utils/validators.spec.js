import test from 'ava';
import { expect } from 'chai';
import {
    isValidPassword,
    passwordsMatch,
    isValidUsername,
    isValidEmail
} from './validators';

test('passwords must be between 6 and 25 characters', t => {
    t.true(isValidPassword('password'))
});

test('passwords can not be greater than 25 characters', t => {
    t.false(isValidPassword('aaaaaaaaaaaaaaaaaaaaaaaaaa'))
});

test('passwords can not be less than 6 characters', t => {
    t.false(isValidPassword('aaaaa'))
});

test('passwords can not be empty', t => {
    t.false(isValidPassword(''))
});

test('invalid characters not allowed', t => {
    t.false(isValidPassword('*&^%$#@!)(+":;'))
});

test('passwords should match', t => {
    t.true(passwordsMatch('password', 'password'))
});

test('passwords should match', t => {
    t.false(passwordsMatch('password', 'differentPassword'))
});

test('password is between 3 and 20 characters', t => {
    t.true(isValidUsername('walkerrandolphsmith'))
});

test('password can not be empty', t => {
    t.false(isValidUsername(''))
});

test('password can not be less than 3 characters', t => {
    t.false(isValidUsername('ws'))
});

test('password can not be greater than 20 characters', t => {
    t.false(isValidUsername('aaaaaaaaaaaaaaaaaaaaa'))
});

test('password can not contain invalid characters', t => {
    t.false(isValidUsername('!@#$%^&*()_+";:,.<>/?'))
});

test('emails must be between 3 and 20 characters', t => {
    t.true(isValidEmail('walkerrandolphsmith@gmail.com'))
});

test('emails must conatin the @ symbol', t => {
    t.false(isValidEmail('walkerrandolphsmithgmail.com'))
});

test('email must contain a . after the @ symbol', t => {
    t.false(isValidEmail('walkerrandolphsmithgmail.@com'))
});

test('email can not contain a . immediately following the @ symbol', t => {
    t.false(isValidEmail('walkerrandolphsmith@.com'))
});

test('email can not contian characters other than a-z, 0-9, -, _,.  before @ symbol', t => {
    t.false(isValidEmail('&.@gmail.com'))
});