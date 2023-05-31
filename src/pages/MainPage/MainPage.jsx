import React from 'react'
import styles from './MainPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import MainCarrousel from '../../components/MainCarrousel/MainCarrousel'
import MainCarrouselButtons from '../../components/MainCarrouselButtons/MainCarrouselButtons'
import Selector from '../../components/Selector/Selector'
import Preview1 from '../../components/Preview1/Preview1'
import Preview2 from '../../components/Preview2/Preview2'
import Episode from '../../components/Episode/Episode'
import NewsElement from '../../components/NewsElement/NewsElement'
import playButton from '../../assets/playButton.svg'
import carrouselArrow from '../../assets/carrouselArrow.svg'
import youtube from '../../assets/youtube.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import tiktok from '../../assets/tiktok.svg'
import crown from '../../assets/crown.svg'

const MainPage = () => (
  <div className={styles.mainPageContainer}>
    <NavBar />
    <MainCarrousel />
    <MainCarrouselButtons />
    <Selector
      color="gray"
      title="¡Anime que puedes mirar gratis!"
      subtitle="¡Disfruta aquí de algunos de nuestros títulos más populares!"
      elements={[
        {
          title: 'JUJUTSU KAISEN',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpe',
        },
        {
          title: 'One Piece',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe',
        },
        {
          title: 'Hunter x Hunter',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe',
        },
        {
          title: 'SPY x FAMILY',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe',
        },
        {
          title: 'My Hero Academia',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe',
        },
        {
          title: 'The Quintessential Quintuplets (Go-Toubun no Hanayome)',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a6279fc503fe64b451a0e63afc65828.jpe',
        },
      ]}
    />
    <Selector
      color="orange"
      title="Artistas que amamos"
      subtitle="Algunos de los artistas musicales favoritos de Crunchyroll"
      elements={[
        {
          title: 'ASIAN KUNG-FU GENERATION',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/music/5ca5ee9ee309a414cc3f5a5fac9403a0.png',
        },
        {
          title: 'Ikimonogakari',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/music/512097bedc3acddf24dfa3527c90df53.png',
        },
        {
          title: 'UVERworld',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/music/6933377ad952e078d62a6a097443ed42.png',
        },
        {
          title: 'BURNOUT SYNDROMES',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/music/fe0a6d42f24d33cdb7a4075203fdc36c.png',
        },
        {
          title: 'SAYURI',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/music/494b4a972b071e349bd6beae7534bc53.png',
        },
        {
          title: 'Queen Bee',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/music/2baa16c41918238e86edc6565ee71805.png',
        },
      ]}
    />
    <div className={styles.mainPageImg}>
      <img alt="mainPageImg" src="https://static.crunchyroll.com/fms/desktop_large/1050x350/7b26ac74-407d-4d84-ab3c-94bd937c6815.png" />
    </div>
    <Preview1
      title="Naruto Shippuden"
      subtitle="Serie &#11049; Subtitulado"
      description="Naruto quiere ser el mejor ninja en la tierra. La acción comienza tras los dos años y medio que el protagonista, Naruto Uzumaki, ha pasado entrenando con su maestro..."
      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3f283002b47c62b1e5d311c45f95c97e.jpe"
    />
    <Preview2
      title="One Piece"
      subtitle="Serie &#11049; Subtitulado"
      description="Hora de estreno en Latinoamérica: Domingos a la 1:30 AM PST (Hora del Pacífico) Hora de estreno en España: Domingos a las 09:30 (Hora española peninsular) Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los Piratas. Se lanza a sucar los mares y se convertirá en un capitán dispuesto a no..."
      src1="https://www.crunchyroll.com/imgsrv/display/thumbnail/260x288/catalog/crunchyroll/283918815cce51edfc3bd01e534298c8.png"
      src2="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe"
    />
    <div className={styles.newEpisodesSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleContainer}>
          <span className={styles.moreEpisodesTitle}>
            <img alt="play" className={styles.playButton} src={playButton} />
            Episodios Nuevos
          </span>
          <span className={styles.calendarTitle}>
            VER CALENDARIO DE LANZAMIENTOS
            <img alt="arrow" className={styles.arrow} src={carrouselArrow} />
          </span>
        </div>
        <div className={styles.dividerOrange} />
        <span className={styles.moreEpisodesSubtitle}>Ayer</span>
        <div className={styles.dividerGray} />
        <div className={styles.newEpisodesGrid}>
          <Episode
            title="(Dob) [ENG] Golden Kamuy"
            subtitle="Episodio 43"
            time="16:30"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/dc4cf400b850058474c592795d1e0803.jpe"
          />
          <Episode
            title="(Dob) Kuma Kuma Kuma Bear"
            subtitle="Episodio 7"
            time="16:00"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/b64829ac8d97e9b7fb7b39646c4718b1.jpe"
          />
          <Episode
            title="(Dobs) Dead Mount Death Play"
            subtitle="Episodio 3"
            time="15:30"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/5ee158b7721e7763892a4479abc8eca0.jpe"
          />
          <Episode
            title="(Dobs) I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too"
            subtitle="Episodio 6"
            time="15:00"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/c50b67d24907e808da01be92d7523504.jpe"
          />
          <Episode
            title="(Dobs) Why Raeliana Ended Up at the Duke's Mansion"
            subtitle="Episodio 2"
            time="14:45"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/78e83f2e06d1cf48224997b02880d6b8.jpe"
          />
          <Episode
            title="(Dob) [GER] Play It Cool, Guys"
            subtitle="Episodio 24"
            time="14:30"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/5e472cbfb1ab45775c27143630acca0b.jpe"
          />
          <Episode
            title="(Dobs) Vinland Saga"
            subtitle="Episodio 9"
            time="14:00"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/44ca7020d3de7a444724dc8e16c43142.jpe"
          />
          <Episode
            title="(Dobs) Dr. STONE"
            subtitle="Episodio 2"
            time="13:45"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/f3accca2b543e1d3b7b9533ca55d2119.jpe"
          />
          <Episode
            title="(Dobs) In Another World With My Smartphone"
            subtitle="Episodio 3"
            time="13:30"
            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/bae3a0a145c57bbb282359390ea1f992.jpe"
          />
        </div>
        <button className={styles.seeMoreEpisodesButton} type="submit">VER MÁS</button>
      </div>
    </div>
    <Selector
      title="¿Por qué tienes ese pelo?"
      subtitle="Es solo un poco de gel"
      color="gray"
      elements={[
        {
          title: 'Yu-Gi-Oh!',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/837409ac43551c978dd2978d3a55f92a.jpe',
        },
        {
          title: 'Bungo Stray Dogs',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f97923c80c70c98675c4f66ddb6c3782.jpe',
        },
        {
          title: 'Trigun',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/067ba823fe77aa4f5fdc8249a6458b31.jpe',
        },
        {
          title: 'Devil May Cry',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6e09c762184cd94b098a8904242e066f.jpe',
        },
        {
          title: 'BLUELOCK',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe',
        },
        {
          title: 'Dr. STONE',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/29e0d306dbff3a163acadf66a35b3cf5.jpe',
        },
      ]}
    />
    <div className={styles.newsSection}>
      <div className={styles.newsContainer}>
        <span className={styles.moreEpisodesTitle}>
          <img alt="play" className={styles.playButton} src={playButton} />
          Noticias Crunchyroll
        </span>
        <div className={styles.dividerOrange} />
        <div className={styles.newsDivider}>
          <div className={styles.newsLeft}>
            <span className={styles.newsSectionTitle}>Noticias de Crunchyroll</span>
            <div className={styles.newsCardLeft}>
              <div className={styles.imgWrapper}>
                <img className={styles.newsLeftImg} alt="news" src="https://img1.ak.crunchyroll.com/i/spire3/7a5fcf8e97f0cc8ba88a595af589149c1684964796_thumb.jpg" />
              </div>
              <div className={styles.newsCardLeftText}>
                <span className={styles.newsCardLeftTitle}>
                  QUIZ: ¿Qué personaje de MASHLE: MAGIC AND MUSCLE eres?
                </span>
                <span className={styles.newsCardLeftTime}>
                  May 29, 2023 10:00am GTM-6
                </span>
                <span className={styles.newsCardLeftTime}>
                  por Julio Vélez
                </span>
              </div>
            </div>
            <div className={styles.newsCardLeft}>
              <div className={styles.imgWrapper}>
                <img className={styles.newsLeftImg} alt="news" src="https://img1.ak.crunchyroll.com/i/spire3/cae15e8bff36e704157cbb886c1f660d1685286483_thumb.png" />
              </div>
              <div className={styles.newsCardLeftText}>
                <span className={styles.newsCardLeftTitle}>
                  SPY x FAMILY lanza dos nuevas imágenes,
                  una &quot;genial&quot; y otra &quot;cómica&quot;
                </span>
                <span className={styles.newsCardLeftTime}>
                  May 28, 2023 1:30pm GTM-6
                </span>
                <span className={styles.newsCardLeftTime}>
                  por A. Trejo Mosquera
                </span>
              </div>
            </div>
          </div>
          <div className={styles.newsRight}>
            <div className={styles.newsRightHeader}>
              <div className={styles.newsSectionTitle}>Más recientes</div>
              <span className={styles.calendarTitle}>
                VER TODAS
                <img alt="arrow" className={styles.arrow} src={carrouselArrow} />
              </span>
            </div>
            <div className={styles.newsContainer}>
              <NewsElement
                src="https://img1.ak.crunchyroll.com/i/spire2/c8204c7d5b2ccb2ba3925af1a23e29c81685417545_thumb.jpg"
                title="Spider-Man se enfrentará a un Doc Ock con cuerpo de colegiala en nuevo..."
                subtitle="May 30, 2023 5:55pm GTM-6"
                author="por Julio Vélez"
              />
              <NewsElement
                src="https://img1.ak.crunchyroll.com/i/spire2/655a3a1ed5351a9e003302790350997d1685476660_thumb.jpg"
                title="Infinity Strash: Dragon Quest The Adventure of Dai ya cuenta con fecha de estreno"
                subtitle="May 30, 2023 2:15pm GTM-6"
                author="por Julio Vélez"
              />
              <NewsElement
                src="https://img1.ak.crunchyroll.com/i/spire2/0e1463d7cc92f1962c5dbdbfc859cd551685423206_thumb.png"
                title="Video de Rascal Does Not Dream of a Sister Venturing Out se centra en Nodoka..."
                subtitle="May 30, 2023 1:17pm GTM-6"
                author="por Julio Vélez"
              />
              <NewsElement
                src="https://img1.ak.crunchyroll.com/i/spire1/aa2a43e3ef8a1ee849cef6d932f723c41685418139_thumb.png"
                title="Sailor Moon Cosmos presenta al reparto de las nueve Shadow Galactica y un nuevo tráiler"
                subtitle="May 30, 2023 12:15pm GTM-6"
                author="por A. Trejo Mosquera"
              />
              <NewsElement
                src="https://img1.ak.crunchyroll.com/i/spire4/b1f4efd7e3e3e2923cc53e3af116c19a1685409690_thumb.png"
                title="Insomniacs After School suma a Sora Amamiya a su reparto como la hermana..."
                subtitle="May 30, 2023 11:10am GTM-6"
                author="por A. Trejo Mosquera"
              />
              <NewsElement
                src="https://img1.ak.crunchyroll.com/i/spire2/969d689f2fe499d0a9cc3d70d67e55881685424115_thumb.png"
                title="Shueisha el servicio de manga vertical JUMP TOON"
                subtitle="May 30, 2023 11:26am GTM-6"
                author="por A. Trejo Mosquera"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.mainPageImg}>
      <img alt="mainPageImg" src="https://static.crunchyroll.com/fms/desktop_large/1050x350/9a3119fe-1d56-4b49-b5a2-2a901416c2fe.png" />
    </div>
    <Selector
      color="orange"
      title="Lo más popular"
      elements={[
        {
          title: 'Demon Slayer: Kimetsu No Yaiba',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/9b22fdc9b3c0a5e0c6373adba8b7ac61.jpe',
        },
        {
          title: "Hell's Paradise",
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dc8eccaf8d0729a43d4d35549f923877.jpe',
        },
        {
          title: 'One Piece',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe',
        },
        {
          title: 'My Hero Academia',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe',
        },
        {
          title: "The Aristocrat's Otherwordly Adventure: Serving Gods Who Go Too Far",
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/862b14b7375ba9a16a2e38b6a568a420.jpe',
        },
        {
          title: 'Summoned to Another World for a Second Time',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2598277921e7ced816bd00d0c27b87ad.jpe',
        },
      ]}
    />
    <Preview2
      title="Moriarty the Patriot"
      src1="https://www.crunchyroll.com/imgsrv/display/thumbnail/260x288/catalog/crunchyroll/41ebfde7731e5ac9b359151a62ef295e.png"
      src2="https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8f3656389c668a4a978ae333607b8617.jpe"
      subtitle="Serie &#11049; Sub | Dob"
      description="A finales del siglo XIX, la nobleza del Imperio Británico reina mientras su clase trabajadora sufre por su culpa. Comprendiendo su difícil situación, William James Moriarty quiere destruir a los dominantes. Frustrado por la desigualdad sistémica, Moriarty elabora estrategias para enmendar a la nación. Ni siquiera el detective..."
    />
    <Selector
      title="¡Curioso y recurioso!"
      subtitle="Una buena conjunción de thriller, fantasía y misterio"
      color="orange"
      elements={[
        {
          title: 'The Case Study of Vanitas',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/efa8f160c660955cf5a510485cef6ea1.jpe',
        },
        {
          title: 'D.Gray-Man',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/66dd2fb27df0de4a19509a3daafcc6b2.jpe',
        },
        {
          title: 'Dances with the Dragons',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/c8773b8bfd7b49a440e1f780a2bf45e3.jpe',
        },
        {
          title: 'Bungo Stray Dogs',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f97923c80c70c98675c4f66ddb6c3782.jpe',
        },
        {
          title: "The Ancient Magus' Bride (Mahou Tsukai No Yome)",
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/21968227ac5bc3f24c36462031ba0234.jpe',
        },
        {
          title: 'MARSRED',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/746df82aaba6be1964db3c93ea81ba51.jpe',
        },
      ]}
    />
    <Selector
      title="Enamorándose en el trabajo"
      subtitle="¡Pero profesionalmente!"
      color="gray"
      elements={[
        {
          title: 'Love of Kill',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dca123d2c28dd98a07b5bbd36ed8ae99.jpe',
        },
        {
          title: 'The Ice Guy and His Cool Female Colleague',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/ba93ce07c6039e72a3ca7976e4b62e21.jpe',
        },
        {
          title: 'Moriarty de Patriot',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8f3656389c668a4a978ae333607b8617.jpe',
        },
        {
          title: 'Love After World Domination',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/71d4ca6bf1e272699a11ee3a76998293.jpe',
        },
        {
          title: 'Silence Fell in Love So I Tried to Prove it',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3b12cc384e3aa828211ca2afa28fb81b.jpe',
        },
        {
          title: 'Beelzebub-jou no Okinimesu Mama',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b680821bd12b6062d30245b9d6438c06.jpe',
        },
      ]}
    />
    <Preview1
      title="BOFURI: I Don't Want to Get Hurt, so I'll Max Out My Defense"
      subtitle="Serie &#11049; Sub | Dob"
      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2583f9f13ed1f26108ae4279f5b50c94.jpe"
      description="Maple quiere evitar lastimarse en su juego de VRMMO, por lo que pone todos sus puntos de habilidad en defensa hasta que ni siquiera podía moverse. ¿¿Funciona??"
    />
    <Preview1
      title="Fire Force"
      subtitle="Serie &#11049; Sub | Dob"
      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1f0515055bab7ae9eb7e50b4d2a7aebb.jpe"
    />
    <Selector
      title="Locura Mecha"
      subtitle="Controla el robot"
      color="gray"
      elements={[
        {
          title: 'SAKUGAN',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7be367f5952c52bb89acfb93f4211c05.jpe',
        },
        {
          title: 'Date a Live',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/20fc1f9c50e855bb8bbeefeab10434ff.jpe',
        },
        {
          title: 'Mobile Suit Gundam',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/50a1c630f14f0927f2ed3648ca24fb34.jpe',
        },
        {
          title: 'ANAIM Warrior at the Borderline',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7315868da5a12c76fe58273e6f782494.jpe',
        },
        {
          title: 'DARLING in the FRANXX',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3fa31250f0604ff16ef6cb0a12dea63d.jpe',
        },
        {
          title: 'Muv-Luv Alternative',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0ab3eed20273cc5be5fb0836cfc705ec.jpe',
        },
      ]}
    />
    <div className={styles.mainPageImg}>
      <img alt="mainPageImg" src="https://static.crunchyroll.com/fms/desktop_large/1050x350/cdf0cab2-78af-43c6-a448-51a37378abe4.png" />
    </div>
    <Selector
      title="Tu dosis de comedia romántica"
      subtitle="Solo son muy buenos amigos"
      color="gray"
      elements={[
        {
          title: 'Tomo-chan Is a Girl!',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7d402dc6bb4c01fe11f62832252d03fc.jpe',
        },
        {
          title: 'Horimiya',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dc24870ae3c042db983cae330ffe6014.jpe',
        },
        {
          title: 'KAGUYA-SAMA: LOVE IS WAR',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/48b9c687382510e7ae195f61fee65c61.jpe',
        },
        {
          title: "DON'T TOY WITH ME, MISS NAGATORO",
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3cdd3ac7e5d8be3bb97c9e39bc1114d4.jpe',
        },
        {
          title: 'Kamisama Hajimemashita',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a0ef6f3c75c62e2c844981db222437b.jpe',
        },
        {
          title: 'A Couple of Cuckoos',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/345cb92fe22f16486c24e3e7111d1a35.jpe',
        },
      ]}
    />
    <Preview1
      title="Vinland Saga"
      subtitle="Serie &#11049; Sub | Dob"
      description="Cuando Thors, un gran guerrero viking muere asesinado en batalla a manos de Askeladd, un mercenario, su hijo, Thorfinn, jura vengarse. Para ello tendrá que..."
      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/44ca7020d3de7a444724dc8e16c43142.jpe"
    />
    <Selector
      title="¡SIEMPRE ES BUEN MOMENTO PARA EL DEPORTE!"
      subtitle="El trabajo en equipo da forma a los sueños."
      color="gray"
      elements={[
        {
          title: 'Aoashi',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f1540a6b98f7b986993e7d2019a62512.jpe',
        },
        {
          title: 'BLUELOCK',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe',
        },
        {
          title: 'Free!',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7984e3fcdcede696913714bb415369f5.jpe',
        },
        {
          title: 'Extreme Hearts',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/e4575b6310cd61d9b4bf912b41446b72.jpe',
        },
        {
          title: "BIRDIE WING -Golf Girls' Story",
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/341c0901823592fcb962363164c94df9.jpe',
        },
        {
          title: 'Clean Freak! Aoyama kun',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf1906c496146a5e21e431c52f52861a.jpe',
        },
      ]}
    />
    <Selector
      title="Compañeros de confianza y muuuuuy tiernitos"
      subtitle="¡Nuestros mejores amigos!"
      color="orange"
      elements={[
        {
          title: 'She and Her Cat -Everything Flows-',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3403523a59d5caa249cb95b79d9a21a6.jpe',
        },
        {
          title: 'SPY x FAMILY',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe',
        },
        {
          title: 'Gochūmon wa Usagi Desu ka?',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/eb7240c98ed971b547c24d00c6753dfa.jpe',
        },
        {
          title: 'Cowboy Bepop',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cecc82b73e8ef376a60f095bd94c36d9.jpe',
        },
        {
          title: 'Blue Exorcist',
          subtitle: 'Sub ! Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8ba76601a6580828dc27271ddd3d27d7.jpe',
        },
        {
          title: 'Naruto',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpe',
        },
      ]}
    />
    <Preview1
      title="The Quintessential Quintuplets (Go-Toubun no Hanayome)"
      subtitle="Serie &#11049; Sub | Dob"
      description="Fuutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo..."
      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/010634e9d1c76f0596248c1091e4586c.jpe"
    />
    <Selector
      title="Cortos y bonitos"
      subtitle="Para los fans del anime sin mucho tiempo."
      color="orange"
      elements={[
        {
          title: 'Love is Like a Cocktail',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b0225a32fdb0da5faffa1d65daf42369.jpe',
        },
        {
          title: 'With a Dog AND a Cat Every Day is Fun',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/77bdefbfd051fd30545e8209c1571fee.jpe',
        },
        {
          title: 'Oh, Suddenly Egyptian God',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/b9cf44fe58c9ec462b73bd1c79285083.jpe',
        },
        {
          title: 'My Sweet Tyrant',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/e62f409bde355b5b8f519693530765c7.jpe',
        },
        {
          title: 'ROOM CAMP',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/c4e330d1264a2f65016eb8ff209e6fdc.jpe',
        },
        {
          title: 'Musasi-no',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1065d6ecff80ea8e9e4929fec93da4af.jpe',
        },
      ]}
    />
    <Selector
      title="¡No te pierdas estos donghua!"
      subtitle="¡Grandes series que tal vez se te escaparon!"
      color="gray"
      elements={[
        {
          title: 'The Daily Life of the Immortal King',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/86c177dc86ced1c46825f01e9d2b4fb7.jpe',
        },
        {
          title: 'All Saints Street',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/3a57ca0c2e0b1993595ee6c73a9160f1.jpe',
        },
        {
          title: 'Bureau of Paranormal Investigarion',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/23e43cf96f081a40b7aa13795e3bd087.jpe',
        },
        {
          title: 'LINK CLICK',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/7d142e198546b9a0758754479a43c649.jpe',
        },
        {
          title: 'The Last Summoner',
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1003d6e36258a618ccb7052751cdd1ff.jpe',
        },
        {
          title: "Heaven Oficial's Blessing",
          subtitle: 'Subtitulado',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0d8d044a3acf93867b9f711f460c2fb7.jpe',
        },
      ]}
    />
    <Preview1
      title="To Your Eternity"
      subtitle="Serie &#11049; Sub | Dob"
      description='Al principio el "orbe" llegó a la Tierra. Podía hacer dos cosas: tomar la forma de cualquier cosa con la que interactuara y regenerarse para volver a la vida. El orbe se...'
      src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0ce768f96b6dfa3db33abfca5108919f.jpe"
    />
    <Selector
      title="¡Has llegado hasta abajo! ¡Aquí tienes tu recompensa!"
      subtitle="¡Felicidades!"
      color="gray"
      elements={[
        {
          title: 'Pop Team Epic',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/64a64db56910a27486d6f720734ea54b.jpe',
        },
        {
          title: 'Lucky Star',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/88093e786c958e352ab5d5dfcd6dbc15.jpe',
        },
        {
          title: 'Ace Attorney',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/69a6173d531328e01c84e204e830a1ec.jpe',
        },
        {
          title: 'The Case Study of Vanitas',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/efa8f160c660955cf5a510485cef6ea1.jpe',
        },
        {
          title: 'Cowboy Bepop',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cecc82b73e8ef376a60f095bd94c36d9.jpe',
        },
        {
          title: 'Danganronpa: The Animation',
          subtitle: 'Sub | Dob',
          src: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/159ccdef2e499ac5872810a2ba6c3676.jpe',
        },
      ]}
    />
    <div className={styles.finalContainer}>
      <img alt="finalImg" className={styles.finalImg} src="https://static.crunchyroll.com/cxweb/assets/img/home/yuzu.png" />
      <span className={styles.finalText}>¿Sigues buscando algo que ver?</span>
      <span className={styles.finalText}>Revisa todo nuestro catálogo</span>
      <button type="submit" className={styles.button2}>
        VER TODO
      </button>
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <span className={styles.columnTitle}>Navegación</span>
          <ul className={styles.columnList}>
            <li>Explorar lo más popular</li>
            <li>Explorar los Simulcasts</li>
            <li>Explorar Manga</li>
            <li>Calendario de lanzamientos</li>
            <li>Noticiasr</li>
            <li>Juegos</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <span className={styles.columnTitle}>Conecta con nosotros</span>
          <ul className={styles.columnList}>
            <li>
              <img className={styles.footerImg} alt="social" src={youtube} />
              Youtube
            </li>
            <li>
              <img className={styles.footerImg} alt="social" src={facebook} />
              Facebook
            </li>
            <li>
              <img className={styles.footerImg} alt="social" src={twitter} />
              Twitter
            </li>
            <li>
              <img className={styles.footerImg} alt="social" src={instagram} />
              Instagram
            </li>
            <li>
              <img className={styles.footerImg} alt="social" src={tiktok} />
              TikTok
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <span className={styles.columnTitle}>Crunchyroll</span>
          <ul className={styles.columnList}>
            <li className={styles.premiumLi}>
              <img className={styles.footerImg} alt="crown" src={crown} />
              Comienza tu Prueba Gratuita
            </li>
            <li>Acerca</li>
            <li>Ayuda/FAQ</li>
            <li>Términos de Uso</li>
            <li>Política de Privacidad</li>
            <li>Herramienta de aceptación de cookies</li>
            <li>Contacto de prensa</li>
            <li>Hazte con nuestras aplicaciones</li>
            <li>Canjear Tarjeta Regalo</li>
            <li>Empleo</li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <span className={styles.columnTitle}>Cuenta</span>
          <ul className={styles.columnList}>
            <li>Crear cuenta</li>
            <li>Acceder</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className={styles.copyright}>© Crunchyroll, LLC</p>
        <p className={styles.copyright}>Clonado por Pablo Zamora</p>
      </div>
    </footer>
  </div>
)

export default MainPage
