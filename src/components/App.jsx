import getTrandMovies from '../servises/app';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      React homework template
    </div>
  );
};

async function get() {
  try {
    const data = await getTrandMovies(1);
    console.log(data);
  } catch (error) {
    console.log('error:', error);
  }
}

get();
