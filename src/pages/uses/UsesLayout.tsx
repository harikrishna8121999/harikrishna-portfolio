import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import { usesData } from '../../data/uses';
import { FiExternalLink } from 'react-icons/fi';
import './UsesLayout.css';

const UsesLayout = () => {
  return (
    <main className="container page">
      <section className="uses-page">
        <SectionTitle>Uses</SectionTitle>

        <p className="uses-intro">
          Everything I reach for on a normal working day — the editors and infrastructure tools
          behind the SaaS work, plus the desk setup around them.
        </p>

        {usesData.map((category) => (
          <div className="uses-category" key={category.category}>
            <h3 className="uses-category-title">{category.category}</h3>

            <ul className="uses-items">
              {category.items.map((item) => (
                <li className="uses-item" key={`${category.category}-${item.name}`}>
                  <span className="uses-item-label">{item.label}</span>
                  {item.link ? (
                    <a className="uses-item-name" href={item.link} target="_blank" rel="noreferrer">
                      {item.name} <FiExternalLink className="uses-item-icon" />
                    </a>
                  ) : (
                    <span className="uses-item-name">{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default UsesLayout;
