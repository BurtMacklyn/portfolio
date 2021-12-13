import React from 'react';

const sizes = [
  '2048-2732',
  '2732-2048',
  '1668-2388',
  '2388-1668',
  '1536-2048',
  '2048-1536',
  '1668-2224',
  '2224-1668',
  '1620-2160',
  '2160-1620',
  '1284-2778',
  '2778-1284',
  '1170-2532',
  '2532-1170',
  '1125-2436',
  '2436-1125',
  '1242-2688',
  '2688-1242',
  '828-1792',
  '1792-828',
  '1242-2208',
  '2208-1242',
  '750-1334',
  '1334-750',
  '640-1136',
  '1136-640'
];

export default function SeoLinks(): JSX.Element {
  return (
    <>
      {sizes.map(size => (
        <link key={sizes.indexOf(size)} rel="apple-touch-startup-image" href={`icons/apple-splash-${size}.jpg`} />
      ))}
    </>
  );
}
