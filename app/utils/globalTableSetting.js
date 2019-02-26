// import { dataChecking } from 'globalUtils';

const tableSetting = {
    // sysvar: {
    //     title: 'System Variable',
    //     link: '/sysvar',
    //     createButtonWidth: '150px',
    //     iconClass: 'fa fa-cogs p-1',
    //     tableWidth: '113.5rem',
    //     api: '',
    //     pathToDataRoot: '',
    //     fields: [
    //         { key: 'key', label: 'Key', width: '6.5rem', align: 'center', type: 'string' },
    //         { key: 'category', label: 'Category', width: '11rem', align: 'center', type: 'string' },
    //         { key: 'start', label: 'Start Date', width: '13rem', align: 'center', type: 'datetime' },
    //         { key: 'end', label: 'End Date', width: '13rem', align: 'center', type: 'datetime' },
    //         { key: 'value', label: 'Value', width: '30rem', align: 'left', type: 'json' },
    //         { key: 'va2lue', label: 'Value', width: '40rem', align: 'center', type: 'string' },
    //     ],
    // },
    partner: {
        title: 'Partners',
        link: '/partner',
        iconClass: 'fa fa-users p-1',
        tableWidth: '85rem',
        api: 'https://review-staging.hermo.my/services/gami/partners/list',
        pathToDataRoot: '',
        actionButtons: [
            {
                title: 'New Partners ',
                type: 'formAction',
                width: '165px',
            },
            {
                title: 'Upload Partners',
                type: 'upload',
                width: '185px',
            },
        ],
        fields: [
            { key: 'id', label: 'ID', width: '5rem', align: 'center', type: 'integer' },
            { key: 'name', label: 'Name', width: '25rem', align: 'left', type: 'string' },
            { key: 'logo', label: 'Logo', width: '10rem', align: 'center', type: 'image' },
            { key: 'status', label: 'Status', width: '10rem', align: 'center', type: 'boolean' },
            { key: 'industry', label: 'industry', width: '15rem', align: 'center', type: 'string' },
            { key: 'url', label: 'url', width: '20rem', align: 'left', type: 'link' },
        ],
    },
    reward: {
        title: 'Reward',
        link: '/reward',
        iconClass: 'fas fa-gift p-1',
        tableWidth: '209rem',
        api: 'https://review-staging.hermo.my/services/gami/rewards/event_list',
        pathToDataRoot: '',
        actionButtons: [
            {
                title: 'New Reward',
                type: 'formAction',
                width: '165px',
            },
            {
                title: 'Upload Reward',
                type: 'upload',
                width: '180px',
            },
        ],
        fields: [
            { key: 'id', label: 'ID', width: '7rem', align: 'center', type: 'integer' },
            { key: 'name', label: 'Name', width: '20rem', align: 'left', type: 'string' },
            { key: 'remarks', label: 'Remarks', width: '20rem', align: 'left', type: 'string' },
            { key: 'tnc_text', label: 'TNC', width: '20rem', align: 'left', type: 'string' },
            { key: 'event_code', label: 'Event Code', width: '10rem', align: 'center', type: 'string' },
            { key: 'url', label: 'Url', width: '25rem', align: 'left', type: 'link' },
            { key: 'created_by', label: 'Created By', width: '15rem', align: 'center', type: 'string' },
            { key: 'created_at', label: 'Created At', width: '10rem', align: 'center', type: 'datetime' },
            { key: 'updated_by', label: 'Updated By', width: '15rem', align: 'center', type: 'string' },
            { key: 'updated_at', label: 'Updated At', width: '10rem', align: 'center', type: 'datetime' },
            { key: 'start_date', label: 'Start Date', width: '10rem', align: 'center', type: 'datetime' },
            { key: 'end_date', label: 'End Date', width: '10rem', align: 'center', type: 'datetime' },
            { key: 'limit_by_user', label: 'Limit', width: '7rem', align: 'center', type: 'string' },
            { key: 'min_user_level', label: 'Min User Level', width: '7rem', align: 'center', type: 'string' },
            { key: 'max_user_level', label: 'Max User Level', width: '7rem', align: 'center', type: 'string' },
            { key: 'amount', label: 'Amount', width: '8rem', align: 'center', type: 'string' },
            { key: 'partner', label: 'Partner', width: '8rem', align: 'center', type: 'string' },
        ],
    },
    voucher: {
        title: 'Voucher',
        link: '/voucher',
        createButtonWidth: '160px',
        iconClass: 'fas fa-ticket-alt p-1',
        tableWidth: '112rem',
        api: 'https://review-staging.hermo.my/services/gami/rewards/voucher_list',
        pathToDataRoot: '',
        actionButtons: [
            {
                title: 'New Voucher',
                type: 'formAction',
                width: '160px',
            },
            {
                title: 'Upload Voucher',
                type: 'upload',
                width: '182px',
            },
        ],
        fields: [
            { key: 'id', label: 'ID', width: '7rem', align: 'center', type: 'integer' },
            { key: 'code', label: 'Name', width: '20rem', align: 'left', type: 'string' },
            { key: 'event_code', label: 'Remarks', width: '20rem', align: 'left', type: 'string' },
            { key: 'user_id', label: 'TNC', width: '20rem', align: 'left', type: 'string' },
            { key: 'created_by', label: 'Created By', width: '15rem', align: 'center', type: 'string' },
            { key: 'created_at', label: 'Created At', width: '10rem', align: 'center', type: 'datetime' },
            { key: 'start_date', label: 'Start Date', width: '10rem', align: 'center', type: 'datetime' },
            { key: 'end_date', label: 'End Date', width: '10rem', align: 'center', type: 'datetime' },
        ],
    },
    // partnerEvent: {
    //     title: 'Partners Event',
    //     link: '/partner_event',
    //     createButtonWidth: '200px',
    //     iconClass: 'fas fa-handshake p-1',
    //     tableWidth: '50rem',
    //     api: '',
    //     pathToDataRoot: '',
    //     fields: [
    //         { key: 'id', label: 'ID', width: '5rem', align: 'center', type: 'string' },
    //         { key: 'name', label: 'Name', width: '25rem', align: 'left', type: 'string' },
    //         { key: 'start date', label: 'Start Date', width: '10rem', align: 'center', type: 'datetime' },
    //         { key: 'status', label: 'Status', width: '10rem', align: 'center', type: 'boolean' },
    //     ],
    // },
};

export default tableSetting;
