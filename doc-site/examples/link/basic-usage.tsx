import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';

function Example() {
  return (
    <Paragraph>
      With <Link href="https://www.datacamp.com/">DataCamp</Link> you can gain
      the career-building Python skills you need to succeed as a data scientist.
      In this track, you&apos;ll learn how this versatile language allows you to
      import, clean, manipulate, and visualize data. Through interactive
      exercises, you&apos;ll get hands-on with some of the most popular{' '}
      <Link href="https://www.python.org/">Python</Link> libraries.
    </Paragraph>
  );
}

export default Example;
