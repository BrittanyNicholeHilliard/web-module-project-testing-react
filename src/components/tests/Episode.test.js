import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';


const testEpisode = {
    id: 1, 
    name: '',
    image: 'https://en.wikipedia.org/wiki/Stock_photography#/media/File:Frog_on_palm_frond.jpg', 
    season: 1, 
    number: 1, 
    summary: 'React Testing Summary', 
    runtime: 1
}

const testEpisodeNoIMG = {
    id: 1, 
    name: '',
    image: null, 
    season: 1, 
    number: 1, 
    summary: 'React Testing Summary', 
    runtime: 1
}

test("renders without error", () => { 
    render(<Episode episode={testEpisode} />)
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode = {testEpisode} />)
    const testSumm = screen.getByText(/React Testing Summary/i)
    expect(testSumm).not.toBeNull()
    expect(testSumm).toBeTruthy()
    expect(testSumm).toHaveTextContent(/React Testing Summary/i)
 });

test("renders default image when image is not defined", () => {
    render(<Episode episode={testEpisodeNoIMG}/>)
    const image = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')
    expect(image).toBeInTheDocument()
  });
