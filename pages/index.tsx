import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import homeStyle from "../style/index.style";

const Home: NextPage = () => (
  <Layout title="Clément Aceituno">
    <section className="introduction d-flex flex-column align-items-center justify-content-center text-center">
      <img
        src="/img/profil.jpg"
        alt="Myself"
        className="rounded-circle profilPic"
      />
      <div className="introduction-content mt-5 p-3 mx-2">
        <h1>Clément Aceituno</h1>
        <h3>Web technologies enthousiast</h3>
      </div>
    </section>
    <div className="container resume-content pt-3">
      <section>
        <h1>Profil</h1>
        <article>
          <p>
            Après avoir recu mon diplôme d&apos;ingénieur en système
            d&apos;information de L&apos;ECE Paris, je décide de me lancer dans
            une aventure entrepreunariale. Avec un camarade de promotion nous
            créeons Luseed avec comme vision d&apos;aider les marques à créer
            des expériences utilisateurs surprenantes à base d&apos;objets
            connectés. Durant cette aventure, j&apos;ai enormément appris tant
            sur le plan technologique que sur le plan humain. J&apos;ai pu
            utiliser des technologies et des services cloud serverless pour
            accélerer notre developpement commercial tout en maintenant les
            coûts d&apos;infrastructures bas.
          </p>
        </article>
      </section>
      <section>
        <h1>Experiences Professionelles</h1>
        <article>
          <h2>Co-fondateur & CTO</h2>
          <p>
            <a href="https://www.luseed.io">Luseed</a> -{" "}
            <time dateTime="2016-08-01">Août 2016</time>
          </p>
          <p>
            Luseed aide les marques à interagir avec leurs audiences dans le
            monde physique en concevant des solutions matérielles et
            logicielles. En 2019, Luseed c&apos;est 150K€ de chiffres
            d&apos;affaires avec 2 salariés
          </p>
          <p>
            Je suis en charge des choix technologiques et des developpements des
            solutions (Applications web, APIs, Tableaux de bord) de
            l&apos;entreprise. L&apos;utilisation de solutions serverless basées
            sur les services AWS, nous permet d&apos;avoir un coût
            d&apos;infrastructure très faible (proche de 0) et d&apos;être
            scalable dès le premier déploiement. J'ai egalement mis en place de
            processus de gestion de projet et de déploiement qui nous ont permis
            de booster notre developpement commercial
          </p>
        </article>
        <article>
          <h2>Enseignant de technologies web</h2>
          <p>
            <a href="https://www.ece.fr">ECE Paris</a> -{" "}
            <time dateTime="2017-09-01">Sept. 2017</time>
          </p>
          <p>
            Transmettre son savoir et partager son expérience est pour moi
            quelque chose d'essentiel. Depuis 2017, j'enseigne aux futurs
            ingénieurs de l'ECE Paris les bonnes pratiques du développement web.
            Je concois les cours, les travaux pratiques et les projets pour
            rendre accessibles des notions parfois complexes. A l'issue de ces
            cours, mes élèves sont capables de déployer des application web
            complexes (front, back, base de données)
          </p>
        </article>
        <article>
          <h2>Assistant au pilote de service (Apprentissage)</h2>
          <p>
            <a href="https://www.edf.fr">EDF</a> -{" "}
            <time dateTime="2013-09-01">Sept. 2013</time> à{" "}
            <time dateTime="2016-08-31">Août 2016</time>
          </p>
          <p>
            Dans un premier temps,mon rôle à été celui de développeur web. On
            m'a assigné à la gestion d'un outil interne utilisé dans tout le
            groupe et porté par le service. J'ai receuilli les besoins des
            utilisateurs, concu et developpé une refonte majeure de cet outil.
            Ensuite j'en suis devenu référent, ce qui m'a permis d'aborder des
            sujet d'assitance utilisateur et de formation. Enfin j'ai assisté le
            pilote de service sur des sujets de gestion d'equipe de prestation
            de service et de gestion de service
          </p>
        </article>
      </section>
      <section>
        <h1>Compétences</h1>
        <article>
          <h3>Compétences techniques</h3>
          <ul>
            <li>HTML/CSS/JS</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Versioning git</li>
            <li>MySQL, MariaDB, PostgresSQL</li>
          </ul>
        </article>
        <article>
          <h3>Gestion de projet</h3>
          <ul>
            <li>Trello</li>
            <li>Confluence</li>
            <li>Jira</li>
          </ul>
        </article>
        <article>
          <h3>Autre</h3>
          <ul>
            <li>Architecture serverless</li>
            <li>Services AWS</li>
            <li>Architecture logicielle</li>
            <li>Gestion de projet</li>
            <li>Transfert de connaissances</li>
          </ul>
        </article>
      </section>
      <section>
        <h1>Diplômes</h1>
        <article>
          <h2>Diplôme d'ingénieur en systèmes d'information</h2>
          <p>
            <a href="https://www.ece.fr">ECE Paris</a> -{" "}
            <time dateTime="2013-09-01">Sept. 2013</time> à{" "}
            <time dateTime="2016-08-31">Août 2016</time>
          </p>
        </article>
        <article>
          <h2>DUT d'informatique</h2>
          <p>
            <a href="https://www.iut-orsay.u-psud.fr">IUT d'orsay</a> -{" "}
            <time dateTime="2011-09-01">Sept. 2011</time> à{" "}
            <time dateTime="2013-08-31">Août 2013</time>
          </p>
        </article>
      </section>
    </div>
    <style jsx>{homeStyle}</style>
  </Layout>
);

export default Home;
