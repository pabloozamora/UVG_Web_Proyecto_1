import React from 'react'
import styles from './MainPage.module.css'
import NavBar from '../../components/NavBar/NavBar'
import MainCarrousel from '../../components/MainCarrousel/MainCarrousel'
import MainCarrouselButtons from '../../components/MainCarrouselButtons/MainCarrouselButtons'
import Selector from '../../components/Selector/Selector'
import Preview1 from '../../components/Preview1/Preview1'
import Preview2 from '../../components/Preview2/Preview2'
import Episode from '../../components/Episode/Episode'
import playButton from '../../assets/playButton.svg'
import carrouselArrow from '../../assets/carrouselArrow.svg'

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
        </div>
      </div>
    </div>
  </div>
)

export default MainPage
