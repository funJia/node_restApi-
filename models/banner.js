module.exports = (sequelize, DataType) => {
    const Banner = sequelize.define('OP_Banner', {
        Id: DataType.INTEGER,
        BannerName: DataType.STRING,
        BannerType: DataType.INTEGER,
        CityCode: DataType.STRING,
        DisplayOrder: DataType.INTEGER,
        ImageUrl: DataType.TEXT,
        ThumbnailUrl: DataType.TEXT,
        LinkUrl: DataType.TEXT,
        OnShelf: DataType.INTEGER,
        IsView: DataType.INTEGER,
        CreateBy: DataType.STRING,
        CreateTime: DataType.DATE,
        LastModifyBy: DataType.STRING,
        LastModifyTime: DataType.DATE,
        ActionType: DataType.INTEGER
    }, {
            'freezeTableName': true,
            'timestamps': false,
        });
    return Banner;
};
