import Empty from 'Components/Empty/Empty';
import React from 'react';
import ResourcesList from '../ResourcesList';

export default function PaginatedResourcesList({
    query,
    renderItem,
    SectionWrapperComponent = React.Fragment,
    headerProps,
    ...otherResourceListProps
}) {
    return (
        <ResourcesList
            headerProps={{ className: 'mb-4', ...headerProps }}
            Section={
                query.data?.data.length ? (
                    <SectionWrapperComponent>
                        {query.data.data.map((item, index) => renderItem({ item, index }))}
                    </SectionWrapperComponent>
                ) : (
                    <Empty className="lg:my-20" />
                )
            }
            {...otherResourceListProps}
        />
    );
}
