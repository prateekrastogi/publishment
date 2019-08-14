import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
              The word &quot;text&quot; has its origins in Quintilian&apos;s book on speeches,
               with the statement that &ldquo;after you have chosen your words,
               they must be weaved together into a fine and delicate fabric&rdquo;,
               with the Latin for fabric being &quot;textum&quot;.
              </p>
              <p>
              In literary theory, a text is any object that can be &quot;read&quot;,
               whether this object is a work of literature, a street sign,
                an arrangement of buildings on a city block, or styles of clothing.
                It is a coherent set of signs that transmits some kind of informative message.
                This set of symbols is considered in terms of the informative message&apos;s content,
                rather than in terms of its physical form or the medium in which it is represented.

              </p>
              <p>
              In contemporary literary studies, a theme is a central topic a text treats.
              Themes can be divided into two categories: a work&apos;s thematic concept is
              what readers &quot;think the work is about&quot; and its thematic statement being
              &quot;what the work says about the subject&quot;.

              </p>

            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
