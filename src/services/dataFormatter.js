export const standardizeUserData = (data) => {
    return {
      userInfos: {
        firstName: data.userInfos?.firstName || '',
        lastName: data.userInfos?.lastName || '',
        age: data.userInfos?.age || 0,
      },
      todayScore: data.todayScore !== undefined ? data.todayScore : data.score || 0,
      keyData: {
        calorieCount: data.keyData?.calorieCount || 0,
        proteinCount: data.keyData?.proteinCount || 0,
        carbohydrateCount: data.keyData?.carbohydrateCount || 0,
        lipidCount: data.keyData?.lipidCount || 0,
      },
    };
  };
  