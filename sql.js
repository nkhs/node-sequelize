Floors.findAll({
    where: { restaurant_id: restaurant_id, },
    include: [
        {
            model: Tables,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [
                {
                    model: Qr_Details,
                    as: "table_qr",
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                },
                { model: UserOrder, as: 'users' },
                {
                    model: user_table,
                    as: "u_t",
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    where: { user_id: user_id },
                    required: must_include
                },
                {
                    model: Customer_Main_Orders,
                    as: "orders",
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                    where: { is_closed: false },
                    required: false,
                    include: [
                        {
                            model: Mobile_User,
                            as: 'user_details'
                        },
                        {
                            model: Customer_Indivisual_Order,
                            as: "indi",
                            attributes: { exclude: ['createdAt', 'updatedAt'] },
                            required: true,
                            include: [
                                {
                                    model: Order_Dishes,
                                    as: "dish",
                                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                                    where: { dish_status: { [Op.not]: 'ORDERED' }, },
                                    required: true,
                                    include: [
                                        {
                                            model: Order_Variations,
                                            as: "vari",
                                            attributes: { exclude: ['createdAt', 'updatedAt'] },
                                            include: [
                                                {
                                                    model: Selected_Variation,
                                                    as: "svar",
                                                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                                                },
                                            ],
                                        },
                                        {
                                            model: Order_Addons,
                                            as: "addon",
                                            attributes: { exclude: ['createdAt', 'updatedAt'] },
                                            include: [
                                                {
                                                    model: Selected_Order_Addons,
                                                    as: "sadd",
                                                },
                                            ],
                                        },
                                    ],
                                },

                            ],
                        },

                    ],
                },
            ],

        },
    ],
})