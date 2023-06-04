import React from 'react';


interface SectionTitleProps {
subheading?: string;
heading?: string;
}


const SectionTitle: React.FC<SectionTitleProps> = ({
subheading = 'Need Subheading',
heading = 'need heading',
}) => {
return (
<>
<p>{subheading}</p>
<h2>{heading}</h2>
</>
);
};

export default SectionTitle;