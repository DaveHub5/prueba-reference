import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
//import Button from '@material-ui/core/Button';
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin';

const PostActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter,
    total
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        <ExportButton
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
        <RefreshButton />
        {/* Add your custom actions */}
       {/* <Button primary onClick={customAction}>Custom Action</Button>*/}
    </CardActions>
);



export const PostList = (props) => (
    <List {...props} title="List of posts" actions={<PostActions />} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="aux" />
        </Datagrid>
    </List>
);