export const SelectedGender = (value) => {
  let gender = []

  switch (value?.isBoy) {
    case true:
      gender.push("Boy")
      break;
    default:
      break;
  }

  switch (value?.isGirl) {
    case true:
      gender.push("Girl")
      break;

    default:
      break;
  }
  return gender
}

export const SelectedSchool = (value) => {
  let school = []

  switch (value?.isElementarySchool) {
    case true:
      school.push("Elementary")
      break;
    default:
      break;
  }

  switch (value?.isMiddleSchool) {
    case true:
      school.push("Middle")
      break;
    default:
      break;
  }

  switch (value?.isHighSchool) {
    case true:
      school.push("High")
      break;

    default:
      break;
  }
  return school
}

export const SelectedViewers = (value) => {
  let viewers = []

  switch (value?.isParent) {
    case true:
      viewers.push("Parent")
      break;
    default:
      break;
  }

  switch (value?.isStudent) {
    case true:
      viewers.push("Student")
      break;
    default:
      break;
  }

  switch (value?.isTeacher) {
    case true:
      viewers.push("Teacher")
      break;

    default:
      break;
  }
  return viewers
}

export const HookFormDefaultValue = (value) => {
  let data = {}

  if (value) {
    data = {
      title: value.title,
      gender: SelectedGender(value),
      school: SelectedSchool(value),
    }
    if (value?.youtubeLink) {
      data['youtubeLink'] = value?.youtubeLink
    } 
    // else if (value?.fileUrl) {
    //   data['fileUrl'] = value?.fileUrl
    // }
    else if (value?.description) {
      data['description'] = value?.description
      data['viewers']=SelectedViewers(value)
    }
  } else {
    data = null
  }
  return data
}