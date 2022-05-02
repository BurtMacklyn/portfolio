import style from '~/style/components/Apps.module.scss';
import Image from 'next/image';
import { Footer } from '~/components/Footer/Footer';
import { Link } from '~/components/Link/Link';
import { Nav } from '~/components/Nav/Nav';
import { Portfolio } from '~/components/Portfolio/Portfolio';

const Apps = () => (
  <Portfolio>
    <Nav />
    <div className="center">
      <div className={style.page}>
        <h2>Apps</h2>
        <div className={style.center}>
          <div className={style.content}>
            <Card>{{ name: 'Music Player', link: '/apps/retro-music', image: '/imgs/apps/retro-music.webp' }}</Card>
            <Card>{{ name: 'Trig Helper', link: '/apps/trig-helper', image: '/imgs/apps/trig-helper.webp' }}</Card>
            <Card>{{ name: 'Snake', link: '/apps/snake', image: '/imgs/apps/snake.webp' }}</Card>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Portfolio>
);

export default Apps;

/* eslint-disable-next-line no-undef */
const Card: React.FC<{ children: { name: string; link: string; image: string } }> = ({ children: game }) => (
  <Link href={game.link} className={style.card}>
    <p>{game?.name}</p>
    <div>
      <Image quality={10} loading="eager" src={game.image} alt={game.name} layout="responsive" width={2400} height={2400} />
    </div>
  </Link>
);