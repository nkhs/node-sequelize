SELECT `A`.*
FROM `A` AS `A`
    LEFT OUTER JOIN `B` AS `B` ON `A`.`bId` = `B`.`id`
    LEFT OUTER JOIN `C` AS `C` ON `A`.`cId` = `C`.`id`
WHERE (
        (
            `B`.`userId` = 100
            OR `C`.`userId` = 100
        )
        AND (
            `B`.`orgId` = 101
            OR `C`.`orgId` = 102
        )
        AND (
            `B`.`contentId` = 'content1'
            OR `C`.`profileId` = 'profileId1'
        )
    );
SELECT "A".*,
    FROM "A"
    LEFT OUTER JOIN "B" ON "A"."bId" = "B"."id"
    LEFT OUTER JOIN "C" ON "A"."cId" = "C"."id"
WHERE (
        "B"."userId" = '100'
        OR "C"."userId" = '100'
    )
    AND (
        "B"."orgId" = '101'
        OR "C"."orgId" = '102'
    )
    AND (
        "B"."contentId" = 'content1'
        OR "C"."profileId" = 'profileId1'
    );