import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useQuery } from 'react-query';
import { VIDEOLIST } from 'Constants/QueriesKeys';
import { http } from 'Utils/Http/Http';
import { useTranslation } from 'react-i18next';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { DataGrid,IconBtnBase, ResourcesList } from 'Components';
import AddIcon from '@mui/icons-material/Add';
import { SelectedGender, SelectedSchool } from 'Components/HookFormDefaultValue/HookFormDefaultValue';

const styles = {
    tableSize: {
        height: 650,
        width: '100%',
    },
};

// Component goes here
const UserPage = () => {
    const { path } = useRouteMatch();
    const history = useHistory();
    const { t } = useTranslation();
    const [page, setPage] = useState(1);
    const perPage = 10;
    const [videoList, setVideoList] = useState()
    const [paginator, setPaginator] = useState()
    const videoListRender = useQuery([VIDEOLIST, { page, perPage }], () =>
        http.post(`/video/list`, {
            query: {type:1},
            options: {
                select: [
                ],
                page: page,
                paginate: perPage
            },
            isCountOnly: false
        }).then(({ data }) => {return( data, setVideoList(data?.data?.data), setPaginator(data?.data?.paginator))}),
    );
    const rowData = []
    if (videoList?.length > 0) {
        for (let i = 0; i < videoList?.length; i++) {
            rowData[i] = {
                title: videoList[i]?.title,
                youtubeLink: videoList[i]?.youtubeLink,
                id: videoList[i]?.id,
                headerImage: videoList[i]?.headerImage,
                gender: SelectedGender(videoList[i]),
                school: SelectedSchool(videoList[i])
            }
        }
    }

    const columns = [
        {
            field: 'title',
            headerName: t('admin.videoDetail.title'),
            minWidth: 150,
            editable: false,
            renderCell: (row) => {
                return (
                    <div className="flex items-center">
                        {row?.row?.title}
                    </div>
                );
            },
        },
        {
            field: 'youtubeLink',
            headerName: t('admin.video.youtubelink'),
            minWidth: 320,
            editable: false,
            renderCell: (row) => {
                return (
                    <a href={row.row.youtubeLink} target="_blank" rel="noreferrer">{row.row.youtubeLink}</a>
                );
            },
        },
        {
            field: `gender`,
            headerName: t('admin.video.gender'),
            minWidth: 150,
            editable: false,
            renderCell: (row) => {
                return (
                    <div className="flex items-center">
                        {row?.row?.gender?.map((item,index)=><span key={index}>&nbsp;{item==="Boy"?t('admin.video.boy'):item==="Girl"?t('admin.video.girl'):null}{row?.row?.gender?.length>index+1 ? ", ":null}</span>)}
                    </div>
                );
            },
        },
        {
            field: 'school',
            headerName: t('admin.video.school'),
            minWidth: 200,
            editable: false,
            renderCell: (row) => {
                return (
                    <div className="flex items-center">
                        {row?.row?.school?.map((item,index)=><span key={index}>&nbsp;{item==="Elementary"?t('admin.video.elementary'):item==="Middle"?t('admin.video.middle'):item==="High"?t('admin.video.high'):null}{row?.row?.school?.length>index+1 ? ", ":null}</span>)}
                    </div>
                );
            },
        },
        {
            field: 'action',
            headerName: t('common.actions'),
            minWidth: 100,
            editable: false,
            renderCell: (row) => {
                return (
                    <div className="flex items-center">
                        <IconBtnBase
                            onClick={() => {
                                handleVideDetail(row);
                            }}
                            size="large">
                            <VisibilityIcon />
                        </IconBtnBase>
                    </div>
                );
            },
        },
    ];

    // Handlers
    const handleVideDetail = (row) => {
        history.push(`${path}/details/${row.id}`);
    };

    // if (accountQuery.isLoading) {
    //     return <ResourceListSkeleton />;
    // }
    return (
        <ResourcesList
            headerProps={{
                title: t('admin.video.title'),
                EndSide: (
                    <div className='flex'>
                        <IconBtnBase
                            onClick={() => {
                                history.push(`${path}/create`);
                            }}
                            size="large">
                            <AddIcon />
                        </IconBtnBase>
                        <IconBtnBase
                            onClick={() => {
                                videoListRender.refetch();
                            }}
                            size="large">
                            <RefreshIcon />
                        </IconBtnBase>

                    </div>
                ),
            }}
            Section={
                <div className="mt-8">
                    <Box sx={styles.tableSize}>
                        <Paper>
                            {videoList ?
                                <DataGrid
                                    pagination
                                    rowCount={paginator?.itemCount}
                                    paginationMode="server"
                                    onPageChange={(newPage) => setPage(newPage+1)}
                                    loading={videoListRender?.isLoading}
                                    rows={rowData}
                                    columns={columns}
                                    pageSize={perPage}
                                />
                                : null}
                        </Paper>
                    </Box>
                </div>
            }
        />
    );
};

export default UserPage;
