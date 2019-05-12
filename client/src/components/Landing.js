import React from 'react';

const Landing = () => {
  return (
    <section className="section">
      <div
        className="container"
        style={{ maxWidth: 1024, textAlign: 'center' }}
      >
        <div className="notification is-primary">
          <h1 style={{ fontSize: '3rem' }}>
            <strong>Hackium?</strong>
          </h1>
          HackMD + Medium <i className="fas fa-smile" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
