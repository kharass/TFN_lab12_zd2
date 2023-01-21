import React from 'react';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <Link to="add?x=5&y=5">Add</Link>
      <br />
      <Link to="sub?x=5&y=3">Sub</Link>
      <br />
      <Link to="mul?x=2&y=2">Mul</Link>
      <br />
      <Link to="div?x=10&y=2">Div</Link>
      <br />
    </div>
  );
}

export function Add() {
  const [searchParams, setSearchParams] = useSearchParams();
  const x = parseInt(searchParams.get('x'));
  const y = parseInt(searchParams.get('y'));

  return (
    <div>
      <Link to="/">Back</Link>
      <p>
        {x} + {y} = {x + y}
      </p>
    </div>
  );
}

export function Sub() {
  const [searchParams, setSearchParams] = useSearchParams();
  const x = parseInt(searchParams.get('x'));
  const y = parseInt(searchParams.get('y'));

  return (
    <div>
      <Link to="/">Back</Link>
      <p>
        {x} - {y} = {x - y}
      </p>
    </div>
  );
}

export function Mul() {
  const [searchParams, setSearchParams] = useSearchParams();
  const x = parseInt(searchParams.get('x'));
  const y = parseInt(searchParams.get('y'));

  return (
    <div>
      <Link to="/">Back</Link>
      <p>
        {x} * {y} = {x * y}
      </p>
    </div>
  );
}

export function Div() {
  const [searchParams, setSearchParams] = useSearchParams();
  const x = parseInt(searchParams.get('x'));
  const y = parseInt(searchParams.get('y'));

  return (
    <div>
      <Link to="/">Back</Link>
      <p>
        {x} / {y} = {y !== 0 ? x / y : 'Dzielenie przez 0'}
      </p>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Nie znaleziono elementu: {location.pathname}</h1>
    </div>
  );
}
