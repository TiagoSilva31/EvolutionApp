const { prisma } = require("../services/prisma")

exports.createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
        }
    })
    return user
}

exports.getUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
        }
    })
    return users
}

exports.getById = async (id) => {
    const user = await prisma.user.findUnique({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
        },
        where: {
            id
        },
    })
    return user
}

exports.updateUser = async (id, data) => {
    const user = await prisma.user.update({
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
        },
        where: {
            id,
        },
        data,
    })
    return user
}

exports.removeUser = async (id) => {
    await prisma.user.delete({
        where: {
            id,
        },
    })
    return
}