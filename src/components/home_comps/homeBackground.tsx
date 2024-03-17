import './home_styling.css'

function HomeBackground(props: { left: boolean; children: React.ReactNode }): JSX.Element {
  return (
    <section
    style={{justifySelf: props.left ? 'flex-start' : 'flex-end'}}>
    </section>
  );
}

export default HomeBackground;
